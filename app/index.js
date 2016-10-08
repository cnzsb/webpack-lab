/**
 * Created by cnzsb on 2016/10/8.
 */

import './scss/main.scss'
import $ from 'jquery'
import moment from 'moment'
import 'moment/locale/zh-cn'
import generateText from './sub'

const app = document.createElement('div')
app.innerHTML = '<h1>Hello World</h1>'
document.body.appendChild(app)
document.body.appendChild(generateText())
$('body').append('<p>TIME: ' + moment().format('LLLL') + '</p>')