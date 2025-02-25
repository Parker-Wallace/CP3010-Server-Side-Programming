Adds a student to mongo from student.json

`curl -# http://localhost:3000/api/students -H "Content-Type: application/json" -d @./data/student.json`

Adds a course to mongo from course.json

`curl -# http://localhost:3000/api/courses -H "Content-Type: application/json" -d @./data/course.json`

`curl -# http://localhost:3000/api/register -H "Content-Type: application/json" -d @./data/register.json

Gets all students from mongo

`curl -# http://localhost:3000/api/students | python -m json.tool`

`curl -# http://localhost:3000/api/courses | python -m json.tool`

`curl -# http://localhost:3000/api/students/id=67b49dd9f332bf27724db5c6 | python -m json.tool`

`curl -X POST http://localhost:3000/api/register/67bcabf0444b7ee1e4f0bdf2/67bcabe3444b7ee1e4f0bdec`

67bcabe3444b7ee1e4f0bde6
67bcabe3444b7ee1e4f0bde9
67bcabe3444b7ee1e4f0bdec

