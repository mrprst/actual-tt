# Actual Technical Test

## Launch the project
&#8594; `git clone https://github.com/mrprst/actual-tt` to get the project<br/>
&#8594; add .env file with database URL in it<br/>
&#8594; `npm i` to install dependencies<br/>
&#8594; `npx prisma generate` to make the link between prisma and .env<br/>
&#8594; `npm run dev` to run it locally<br/>
&#8594; `npm run test:watch` to run the tests<br/>

## N°1 : Make a Chessboard in React & Typescript
I chose to focus on the board itself and not go further with the game logic due to limited time resources. I would have done it differently now that i've finished it. But good exercice !

## N°2 : Render the Fibonacci suite for a n number
Classic beginner kata, it was nice to have to make it with Typescript.
I've added a few React hooks to make it interactive

## N°3 : Make a jobboard modelisation
For this one I chose to use what I know best in terms of ORM : Prisma.
It is easy to use, optimised for Typescript and rule with NextJs, a React framework that I like. If you wish to know how my database is built, just go to `/prisma/schema.prisma`

## N°4 : Make tests for the 3 exercices
I used Jest and React Testing Component for this part.
The tests are located in the `/src/__tests__` folder

Thank you : )