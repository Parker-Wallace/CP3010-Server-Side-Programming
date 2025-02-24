Adds a student to mongo from student.json

`curl -# http://localhost:3000/api/students -H "Content-Type: application/json" -d @./data/student.json`

Adds a course to mongo from course.json

`curl -# http://localhost:3000/api/courses -H "Content-Type: application/json" -d @./data/course.json`

Gets all students from mongo

`curl -# http://localhost:3000/api/students | python -m json.tool`

`curl -# http://localhost:3000/api/courses | python -m json.tool`

`curl -# http://localhost:3000/api/students/id=67b49dd9f332bf27724db5c6 | python -m json.tool`

`curl -# http://localhost:3000/api/register/sid=67b49dd9f332bf27724db5c6/cid=67923ad619dda76e0a8c9bd3 | python -m json.tool`

`curl -X POST http://localhost:3000/api/register/67b49dd9f332bf27724db5c6/67923ad619dda76e0a8c9bd3`


