const { response } = require('express');
const { request } = require('express');
const express = require('express');

const app = express();

app.get("/courses", (request,response) => {
return response.json([
    "Curso 1",
    "Curso 2",
    "Curso 3"
]);
});

app.get("/courses", (request,response) => {
    return response.json([
        "Curso 1",
        "Curso 2",
        "Curso 3",
        "Curso 4"
    ]);
    });

    app.put("/courses/:id", (request,response) => {
        return response.json([
            "Curso 6",
            "Curso 2",
            "Curso 3",
            "Curso 4"
        ]);
        });

        app.put("/courses/:id", (request,response) => {
            return response.json([
                "Curso 6",
                "Curso 7",
                "Curso 3",
                "Curso 4"
            ]);
            });

            app.put("/courses/:id", (request,response) => {
                return response.json([
                    "Curso 6",
                    "Curso 7",
                    "Curso 4"
                ]);
                });

app.listen(3333);