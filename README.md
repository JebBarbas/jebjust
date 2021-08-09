# jebjust
Return only what you want, the most specialized javascript module ever. Built in a computer, written using the most new technologies like ECMAScript 2021, TypeScript, NodeJS.

---

![Travis (.com)](https://img.shields.io/travis/com/jebbarbas/jebjust?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/jebbarbas/jebjust?style=for-the-badge)
![David](https://img.shields.io/david/jebbarbas/jebjust)

![EPICITY](https://img.shields.io/badge/EPICITY-LEGENDARY-red?style=for-the-badge)

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
const just = require('jebjust')
```
Or ES2015 syntax:
```js
import just from 'jebjust'
```

## Instalation - Browser
To use in the browser you can use the CDN provided by [jsDelivr](https://www.jsdelivr.com/) to our browserified file.
```html
<script src="https://cdn.jsdelivr.net/npm/jebjust@1.0.0/dist/bundle.js"></script>
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

import just from 'jebjust' // <- DON'T FORGET, VERY IMPORTANT

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