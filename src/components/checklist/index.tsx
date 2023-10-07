import React from 'react';
import { Typography, ToggleButton, ToggleButtonGroup } from '@mui/material';
import Shoppinglist from './components/shoppingList';
import ToDoList from './components/todoList';

// const messages = [
//     {
//       id: 1,
//       primary: 'Brunch this week?',
//       secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
//       person: '/static/images/avatar/5.jpg',
//     },
//     {
//       id: 2,
//       primary: 'Birthday Gift',
//       secondary: `Do you have a suggestion for a good present for John on his work
//         anniversary. I am really confused & would love your thoughts on it. 
//         Do you have a suggestion for a good present for John on his work
//         anniversary. I am really confused & would love your thoughts on it.`,
//       person: '/static/images/avatar/1.jpg',
//     },
//     {
//       id: 3,
//       primary: 'Recipe to try',
//       secondary: 'I am try out this new BBQ recipe, I think this might be amazing',
//       person: '/static/images/avatar/2.jpg',
//     },
//     {
//       id: 4,
//       primary: 'Yes!',
//       secondary: 'I have the tickets to the ReactConf for this year.',
//       person: '/static/images/avatar/3.jpg',
//     },
//     {
//       id: 5,
//       primary: "Doctor's Appointment",
//       secondary: 'My appointment for the doctor was rescheduled for next Saturday.',
//       person: '/static/images/avatar/4.jpg',
//     },
//     {
//       id: 6,
//       primary: 'Discussion',
//       secondary: `Menus that are generated by the bottom app bar (such as a bottom
//         navigation drawer or overflow menu) open as bottom sheets at a higher elevation
//         than the bar.`,
//       person: '/static/images/avatar/5.jpg',
//     },
//     {
//       id: 7,
//       primary: 'Summer BBQ',
//       secondary: `Who wants to have a cookout this weekend? I just got some furniture
//         for my backyard and would love to fire up the grill.`,
//       person: '/static/images/avatar/1.jpg',
//     },
//     {
//       id: 8,
//       primary: 'Summer BBQ',
//       secondary: `Who wants to have a cookout this weekend? I just got some furniture
//         for my backyard and would love to fire up the grill.`,
//       person: '/static/images/avatar/1.jpg',
//     },
//     {
//       id: 9,
//       primary: 'Summer BBQ',
//       secondary: `Who wants to have a cookout this weekend? I just got some furniture
//         for my backyard and would love to fire up the grill.`,
//       person: '/static/images/avatar/1.jpg',
//     },
//     {
//       id: 10,
//       primary: 'Summer BBQ',
//       secondary: `Who wants to have a cookout this weekend? I just got some furniture
//         for my backyard and would love to fire up the grill.`,
//       person: '/static/images/avatar/1.jpg',
//     },
//     {
//       id: 11,
//       primary: 'Summer BBQ',
//       secondary: `Who wants to have a cookout this weekend? I just got some furniture
//         for my backyard and would love to fire up the grill.`,
//       person: '/static/images/avatar/1.jpg',
//     },
//     {
//       id: 12,
//       primary: 'Summer BBQ',
//       secondary: `Who wants to have a cookout this weekend? I just got some furniture
//         for my backyard and would love to fire up the grill.`,
//       person: '/static/images/avatar/1.jpg',
//     },
//   ];

function Checklist(props: any) {
    const [checked, setChecked] = React.useState([1]);
    const [alignment, setAlignment] = React.useState('shopping');

    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => setAlignment(newAlignment ? newAlignment : "shopping");

    return (
        <>
            <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
                {alignment === 'shopping' ? "Shopping Checklist" : "ToDo List"}
            </Typography>
            {/* <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                fullWidth
                onChange={handleChange}
                aria-label="Checklist-type"
                size='small'
            >
                <ToggleButton value="shopping">Shopping</ToggleButton>
                <ToggleButton value="normal">Todo</ToggleButton>
            </ToggleButtonGroup> */}
            {alignment === 'shopping' ? <Shoppinglist /> : <ToDoList />}
        </>
    )
}

export default Checklist;