# jebjust
Return only what you want, the most specialized javascript module ever. Built in a computer, written using the most new technologies like ECMAScript 2021, TypeScript, NodeJS.

---

![Travis (.com)](https://img.shields.io/travis/com/jebbarbas/jebjust?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/jebbarbas/jebjust?style=for-the-badge)
![David](https://img.shields.io/david/jebbarbas/jebjust?style=for-the-badge)
![npm bundle size](https://img.shields.io/bundlephobia/min/jebjust?style=for-the-badge)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/jebbarbas/jebjust?style=for-the-badge)
![GitHub repo file count](https://img.shields.io/github/directory-file-count/jebbarbas/jebjust?style=for-the-badge)
![Lines of code](https://img.shields.io/tokei/lines/github/jebbarbas/jebjust?style=for-the-badge)
![GitHub all releases](https://img.shields.io/github/downloads/jebbarbas/jebjust/total?style=for-the-badge)
![npm](https://img.shields.io/npm/dt/jebjust?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues-raw/jebbarbas/jebjust?style=for-the-badge)
![NPM](https://img.shields.io/npm/l/jebjust?style=for-the-badge)
![npm](https://img.shields.io/npm/v/jebjust?style=for-the-badge)
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/jebbarbas/jebjust?style=for-the-badge)
![GitHub contributors](https://img.shields.io/github/contributors/jebbarbas/jebjust?style=for-the-badge)
![npm collaborators](https://img.shields.io/npm/collaborators/jebjust?style=for-the-badge)
![EPICITY](https://img.shields.io/badge/EPICITY-LEGENDARY-red?style=for-the-badge)
![RATE](https://img.shields.io/badge/RATE-⭐⭐⭐⭐⭐-success?style=for-the-badge)
![PRICE](https://img.shields.io/badge/PRICE-$0-blueviolet?style=for-the-badge)
![AUTHOR](https://img.shields.io/badge/AUTHOR-jebbarbas-ff69bf?style=for-the-badge)
![MASTER](https://img.shields.io/badge/MASTER-YES-blue?style=for-the-badge)
![TYPESCRIPT](https://img.shields.io/badge/TYPESCRIPT-YES-blue?style=for-the-badge)
![JAVASCRIPT](https://img.shields.io/badge/JAVASCRIPT-YES-yellow?style=for-the-badge)
![HTML](https://img.shields.io/badge/HTML-A_LITTLE_BIT-orange?style=for-the-badge)
![CSHARP](https://img.shields.io/badge/CSHARP-NO-blueviolet?style=for-the-badge)
![CPLUSPLUS](https://img.shields.io/badge/CPLUSPLUS-NO-blue?style=for-the-badge)
![C](https://img.shields.io/badge/C-NO-blue?style=for-the-badge)
![PYTHON](https://img.shields.io/badge/PYTHON-NO-blue?style=for-the-badge)
![NODE](https://img.shields.io/badge/NODE-YES-080?style=for-the-badge)
![NPM](https://img.shields.io/badge/NPM-YES-orange?style=for-the-badge)
![CAN_INSTALL](https://img.shields.io/badge/CAN_INSTALL-YES-success?style=for-the-badge)
![CAN_INSTALL_DEV](https://img.shields.io/badge/CAN_INSTALL_DEV-YES-success?style=for-the-badge)
![CAN_INSTALL_GLOBAL](https://img.shields.io/badge/CAN_INSTALL_GLOBAL-YES-success?style=for-the-badge)
![NAME](https://img.shields.io/badge/NAME-JEBJUST-red?style=for-the-badge)



![GitHub forks](https://img.shields.io/github/forks/jebbarbas/jebjust?style=social)
![GitHub Repo stars](https://img.shields.io/github/stars/jebbarbas/jebjust?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/jebbarbas/jebjust?style=social)


## Instalation - NodeJS
You can install justjs using the next line in your terminal or CLI:
`npm i jebjust`

Or if you want to install it as a dev-dependency:
`npm i jebjust -D`

Or if you want to install it globally:
`npm i -g jebjust`

## Importation - NodeJS
You can import it ussing the commonJS module syntax:
```js
const { just } = require('jebjust')
```
Or ES2015 syntax:
```js
import { just } from 'jebjust'
```

## Instalation - Browser
To use in the browser you can use the CDN provided by [jsDelivr](https://www.jsdelivr.com/) to our browserified file.
```html
<script src="https://cdn.jsdelivr.net/npm/jebjust@1.0.1/dist/bundle.js"></script>
```
Now jebjust is available in `window.just`

## Usage
Once imported, you can use jebjust using the exported function with a paramether that is gonna be returned, here is an example using react-native, react-native-paper, lodash (to short code) and jebcolors (another of my modules that makes a great synergy with this one). 
```jsx
import React, {useState} from 'react'
import { View, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import { jebcMainColors, bootstrapMainColors, socialMainColors } from 'jebcolors'
import { uiMainGradients } from 'jebcolors/dist/gradients'
import { rgb } from 'jebcolors/dist/functions'
import _ from 'lodash'

import { just } from 'jebjust' // <- DON'T FORGET, VERY IMPORTANT

const MyComponent = (props) => {
    const justUseState = just(useState)
    const justMagic = just(jebcMainColors.magic)
    const justFalse = just(false)

    const [mainColor, setMainColor] = justUseState(justMagic)
    const [blackAndWhite, setBlackAndWhite] = justUseState(justFalse)
    
    const random = just(_.sample)

    const changeMainColor = () => {
        const randomColors = [just(jebcMainColors.magic), just(bootstrapMainColors.success),just(socialMainColors.google)]
        const randomBAWColors = [just('#ffffff'), just('#000000')]

        const justRandomColors = just(randomColors)
        const justRandomBAWColors = just(randomBAWColors)

        if(blackAndWhite){
            setMainColor(random(justRandomBAWColors))
        }
        else{
            setMainColor(random(justRandomColors))
        }
    }

    return (
        <View style={[styles.padding,{backgroundColor: just(mainColor)}]}>
            <Button onPress={changeMainColor}>Another Color!!!</Button>
            <Button onPress={just(()=>setBlackAndWhite(!blackAndWhite))}>Black and White</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    padding: {
        padding: just(5)
    }
})

```