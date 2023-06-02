<?php

namespace App\Classes\Elastic;

use Monolog\LogRecord;
use Monolog\Processor\ProcessorInterface;
use Elastic\Apm\ElasticApm;

class ElasticApmProcessor implements ProcessorInterface
{
    public function __invoke(LogRecord $record): LogRecord
    {
        $this->addTransactionInfo($record);
        $this->addUserData($record);

        return $record;
    }

    protected function addTransactionInfo(LogRecord $record): void
    {
        $record->extra['trace.id'] = $this->getElasticTransaction()->getTraceId();
        $record->extra['transaction.id'] = $this->getElasticTransaction()->getId();
        $record->extra['span.id'] = $this->getElasticTransaction()->getCurrentSpan()->getId();
    }

    protected function addUserData(LogRecord $record): void
    {
        $user = $this->getElasticTransaction()->context()->user();

        if ($user->id) {
            $record->extra['user.id'] = $user->id;
        }

        if ($user->username) {
            $record->extra['user.username'] = $user->username;
        }

        if ($user->email) {
            $record->extra['user.email'] = $user->email;
        }
    }

    protected function getElasticTransaction(): mixed
    {
        return ElasticApm::getCurrentTransaction();
    }
}
