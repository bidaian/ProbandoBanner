<?php

namespace MediaWiki\Extension\ProbandoBanner;

use OutputPage;
use Skin;

class Hooks {

    /**
     * Display a banner on every page.
     *
     * @param OutputPage $out
     * @param Skin $skin
     */
    public static function onBeforePageDisplay(
        $out,
        $skin
    ): void {
        $out->prependHTML(
            '<div style="
                padding: 8px;
                background: #f0f0f0;
                color: #222;
                text-align: center;
                font-weight: bold;
            ">Probando</div>'
        );
    }
}

