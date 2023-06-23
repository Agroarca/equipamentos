<?php

// phpcs:disable Squiz.PHP.DisallowBooleanStatement

namespace App\Classes\Elastic;

use InvalidArgumentException;
use Monolog\Formatter\FormatterInterface;
use Monolog\Handler\FormattableHandlerInterface;
use Monolog\Handler\HandlerInterface;
use Monolog\Handler\RotatingFileHandler;
use Monolog\Level;
use Monolog\LogRecord;
use Elastic\Apm\Impl\Util\ElasticApmExtensionUtil;

/**
 * @codeCoverageIgnore
 */
class ElasticAPMHandler extends RotatingFileHandler implements FormattableHandlerInterface
{
    public bool $apmEnabled = false;

    public function __construct(int|string|Level $level = Level::Debug)
    {
        if (class_exists('Elastic\\Apm\\Impl\\Util\\ElasticApmExtensionUtil')) {
            if (ElasticApmExtensionUtil::isLoaded() && ElasticApmExtensionUtil::getEnabledConfig()) {
                $this->apmEnabled = true;
            }
        }

        if (!$this->apmEnabled) {
            return;
        }

        parent::__construct(storage_path('elastic-logs/laravel.log'), 7, $level);
        $this->pushProcessor(new ElasticApmProcessor());
    }

    public function isHandling(LogRecord $record): bool
    {
        return ($this->apmEnabled && parent::isHandling($record));
    }

    public function setFormatter(FormatterInterface $formatter): HandlerInterface
    {
        if ($formatter instanceof ElasticAPMFormatter) {
            return parent::setFormatter($formatter);
        }

        throw new InvalidArgumentException('ElasticAPMHandler is only compatible with ElasticAPMFormatter');
    }
}
