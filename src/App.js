import React from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'

const items = [
    {
        title: 'What is React?',
        content: 'React is a front-end Javascript framework.',
    },
    {
        title: 'Why ure React',
        content: 'React is favourite Js library among engineers'
    },
    {
        title: 'How do you use react?',
        content: 'You use React by creating components.'
    }
]

export default () => {
    return <div><Search /></div>
}
