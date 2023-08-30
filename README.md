# blog-nodejs

npm start #to start project

npm run watch #listen change css

npm install express

npm install nodemon & inspect

mongoose ver > 7. và mongoose-slug-generator bị xung đột về exec(). Hàm exec() trong mongoose ver > 7. không hỗ trợ callback nữa, ví dụ exec(() => {}) sẽ bị lỗi.
Nhưng trong mongoose-slug-generator hàm exec() có nhận callback nên hai pkg sẽ không dùng chung được với nhau trong dự án. vì thế đã hạ phiên bản của mongoose xuống phiên bản 6.5.0
