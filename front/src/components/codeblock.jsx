"use client";
import React, { useState, useEffect } from 'react';
import { codeToHtml } from 'shiki'
import { codeToTokens } from 'shiki'


const CodeBlock = () => {


    //const seperateCodeIntoBlocks = (code) => {
    //    // seperate the python code into blocks
    //    // by seperating every time we 

    useEffect(() => { (async () => {

            const code = 'const a = 1' // input code
            const html = await codeToHtml(code, {
                lang: 'javascript',
                theme: 'vitesse-dark'
            })

            //console.log(html) // highlighted html string


            const { tokens } = await codeToTokens(`def f(x):
    return x
x = 12
f(x)
`, {
                lang: 'python',
                theme: 'min-dark'
            })

            //console.log(tokens)

    })() }, [])


    return (
        <>



        </>
    )
}

export default CodeBlock;
