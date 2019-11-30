var gl; // глобальная переменная для контекста WebGL

function start() {
  var canvas = document.getElementById("glcanvas");

  gl = initWebGL(canvas);      // инициализация контекста GL
  
  // продолжать только если WebGL доступен и работает
  
  if (gl) {
    gl.clearColor(0.0, 0.0, 0.0, 1.0);                      // установить в качестве цвета очистки буфера цвета черный, полная непрозрачность
    gl.enable(gl.DEPTH_TEST);                               // включает использование буфера глубины
    gl.depthFunc(gl.LEQUAL);                                // определяет работу буфера глубины: более ближние объекты перекрывают дальние
    gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);      // очистить буфер цвета и буфер глубины.
  }
}
