---
title: "Image & Markdown plugin mess"
description: ""
date: "2020-03-30"
tags: "#100DaysOfGatsby #challengeThree"
featuredImage: "../../images/fi.jpg"
---

Shit we have a lot of plugins and plugin-in-plugin for markdown and images, let's clear things up

## Definitions

**Tranformer (plugin) :** Take a source (image file, markdown) and transform it into something more usable (often in the GraphQL data layer)

## List of plugins

- **gatsby-transformer-remark** : Parses (adds data to the GraphQL data layer) Markdown files using Remark.
  - **gatsby-remark-image** : Optimize images in markdown so they can be used in the production build.
- **gatsby-plugin-sharp** : Low-level plugin, not to use alone. Allows to process image with sharp library, used by 
- **gatsby-transformer-sharp** : Create ImageSharp node from image types supported by Sharp