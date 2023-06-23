<?php

namespace App\Classes\Elastic;

use Throwable;
use Monolog\Formatter\NormalizerFormatter;
use Monolog\LogRecord;

/**
 * @codeCoverageIgnore
 */
class ElasticAPMFormatter extends NormalizerFormatter
{
    private const ECS_VERSION = '1.2.0';

    protected function normalize(mixed $data, int $depth = 0): mixed
    {
        if ($depth > $this->maxNormalizeDepth) {
            return parent::normalize($data, $depth);
        }

        if ($data instanceof Throwable) {
            return $this->serializeThrowable($data);
        }

        return parent::normalize($data, $depth);
    }

    public function format(LogRecord $record): string
    {
        $inRecord = $this->normalize($record->toArray());

        $outRecord = [
            '@timestamp' => $inRecord['datetime'],
            'log.level' => $inRecord['level_name'],
            'ecs.version' => self::ECS_VERSION,
        ];

        if (isset($inRecord['message']) === true) {
            $outRecord['message'] = $inRecord['message'];
        }

        $outRecord['log'] = [
            'logger' => $inRecord['channel'],
        ];

        $outRecord += $inRecord['extra'];
        $outRecord += $inRecord['context'];

        return $this->toJson($outRecord) . "\n";
    }

    protected function serializeThrowable(Throwable $throwable): array
    {
        return [
            'type' => get_class($throwable),
            'message' => $throwable->getMessage(),
            'code' => $throwable->getCode(),
            'stack_trace' => $throwable->__toString(),
        ];
    }
}
