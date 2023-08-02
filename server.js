var app = require('express')(); 
//express 모듈을 실행하고 app이라는 이름으로 저장

app.set('port',8080)
// 포트는 8080으로localhost:8080 -> 오픈하겠다
app.post('/', (req, res) =>{  res.send(' / 루트요청 있었음'); })
// localhost:8080/ 로 요청하면 " / 루트요청 있었음 " 이라고 화면에 띄워줌


app.listen(app.get('port'), () =>{
    console.log('콘솔에서 시간으로 확인해보면 바로 알게됨');
})
// 서버는 듣겠다. 8080에 대한 요청이 발생시 콘솔창에 아래의 메세지 출력