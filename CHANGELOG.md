---
title: CHANGELOG
layout: default
---

# CHANGELOG

All notable user-facing changes to this project are documented in this file.

{: .highlight }
Monthly updates

## HEAD

{: .note }
This website is built from the `HEAD` of the `main` branch of the theme repository.

Code changes to `main` that are *not* in the latest release:

- Added: `nav_enabled` site, layout, and page-level variable to selectively show or hide the side/mobile menu by [@kevinlin1] in [#1441]. The minimal layout was reimplemented using this feature, and now has support for the site-wide search bar and auxiliary links.

Docs changes made since the latest release:

- Docs: Explained the `nav_enabled` variables as an alternative to using the minimal layout [@kevinlin1] in [#1441].

## Release v0.0.1

Hi everyone! This patch release fixes a bug where a default layout with unrestricted `scope` (`path: ""`) breaks JavaScript functionality. Users who do not use a default layout with unrestricted `scope` should not be affected. This should be a straightforward upgrade for all users. Thank you to [@pdmosses] for triaging and fixing the bug!
