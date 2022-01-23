import React from 'react';
import favicon from '../static/hippieduoicon.png';

let inlinedStyles = ""
if (process.env.NODE_ENV === "production") {
    try {
        inlinedStyles = require("!raw-loader!../public/styles.css")
    } catch (e) {
        console.log(e)
    }
}

const metroCoolScript = `function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}loadScript(function(){beTracker.t({hash:"8501ddd119d267a796555aadc5a506c5"})})`
const Headers = () => {
    return (
        <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=G-L35RF9TSNV`} />
            <script dangerouslySetInnerHTML={{
                __html: `

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-L35RF9TSNV');
`}} />
<script dangerouslySetInnerHTML={{__html: metroCoolScript}} />
        </>
    )
}

const HTML = ({ headComponents, postBodyComponents, body, htmlAttributes, bodyAttributes, preBodyComponents }) => {
    let css
    if (process.env.NODE_ENV === "production") {
        css = (
            <style
                id="gatsby-inlined-css"
                dangerouslySetInnerHTML={{ __html: inlinedStyles }}
            />
        )
    }
    return (
        <html {...htmlAttributes}>
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                {headComponents}
                {process.env.NODE_ENV === "production" && <Headers />}
                <link rel="icon" href={favicon} />
                {css}
            </head>
            <body {...bodyAttributes}>
                {preBodyComponents}
                <div id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
                {postBodyComponents}
            </body>
        </html>
    )
}

export default HTML;

