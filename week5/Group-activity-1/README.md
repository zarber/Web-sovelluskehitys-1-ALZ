## Group Activities

> Work in group to solve these tasks.

## Task 1

- Inside the `src` folder:
  - Run `npm install`
  - Run `npm run dev`
  - Visit this address `http://localhost:4000/api/workouts/`
- Use POSTMAN to test the endpoints:
  - Alternatively, you can use `REST VS code extension`
  - Examples:

```http
GET http://localhost:4000/api/workouts
```

```http
POST http://localhost:4000/api/workouts
{
    "title":"Workout 1",
    "reps":40,
    "load":10
}
```

## Task 2

- What is MVC? - MVC (Model-View-Controller) is a pattern in software design commonly used to implement user interfaces, data, and controlling logic. It emphasizes a separation between the software's business logic and display.
- Does the code in the `src` folder follow the MVC pattern? Yes, I think so.
