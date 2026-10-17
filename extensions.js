
{
  "name": "ProbandoBanner",
  "version": "1.0.0",
  "author": "Your Name",
  "description": "Displays a Probando banner at the top of every page.",
  "type": "other",
  "requires": {
    "MediaWiki": ">= 1.39.0"
  },
  "AutoloadClasses": {
    "MediaWiki\\Extension\\ProbandoBanner\\Hooks": "includes/Hooks.php"
  },
  "Hooks": {
    "BeforePageDisplay": "MediaWiki\\Extension\\ProbandoBanner\\Hooks::onBeforePageDisplay"
  },
  "manifest_version": 2
}

