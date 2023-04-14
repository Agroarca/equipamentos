function tituloTamanhoMinimo(tipo) {
  switch (tipo) {
    case 1:
    case 2:
      return "Número Mínimo";
    case 3:
    case 4:
      return "Tamanho Mínimo";
    default:
      return "";
  }
}
function tituloTamanhoMaximo(tipo) {
  switch (tipo) {
    case 1:
    case 2:
      return "Número Máximo";
    case 3:
    case 4:
      return "Tamanho Máximo";
    default:
      return "";
  }
}
function mostrarTamanhos(tipo) {
  return [1, 2, 3, 4].includes(tipo);
}
function mostrarCasasDecimais(tipo) {
  return tipo === 2;
}
function mostrarOpcoes(tipo) {
  return tipo === 5;
}
export {
  tituloTamanhoMaximo as a,
  mostrarCasasDecimais as b,
  mostrarOpcoes as c,
  mostrarTamanhos as m,
  tituloTamanhoMinimo as t
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVscGVyLWRjMmZjZDI3LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9yZXNvdXJjZXMvanMvUGFnZXMvQWRtaW4vRXF1aXBhbWVudG9zL0NhcmFjdGVyaXN0aWNhcy9Db21wb25lbnRlcy9IZWxwZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHRpdHVsb1RhbWFuaG9NaW5pbW8odGlwbykge1xuICAgIHN3aXRjaCAodGlwbykge1xuICAgIGNhc2UgMTpcbiAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiAnTsO6bWVybyBNw61uaW1vJ1xuICAgIGNhc2UgMzpcbiAgICBjYXNlIDQ6XG4gICAgICAgIHJldHVybiAnVGFtYW5obyBNw61uaW1vJ1xuICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnJ1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRpdHVsb1RhbWFuaG9NYXhpbW8odGlwbykge1xuICAgIHN3aXRjaCAodGlwbykge1xuICAgIGNhc2UgMTpcbiAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiAnTsO6bWVybyBNw6F4aW1vJ1xuICAgIGNhc2UgMzpcbiAgICBjYXNlIDQ6XG4gICAgICAgIHJldHVybiAnVGFtYW5obyBNw6F4aW1vJ1xuICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnJ1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vc3RyYXJUYW1hbmhvcyh0aXBvKSB7XG4gICAgcmV0dXJuIFsxLCAyLCAzLCA0XS5pbmNsdWRlcyh0aXBvKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbW9zdHJhckNhc2FzRGVjaW1haXModGlwbykge1xuICAgIHJldHVybiB0aXBvID09PSAyXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtb3N0cmFyT3Bjb2VzKHRpcG8pIHtcbiAgICByZXR1cm4gdGlwbyA9PT0gNVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFPLFNBQVMsb0JBQW9CLE1BQU07QUFDdEMsVUFBUSxNQUFJO0FBQUEsSUFDWixLQUFLO0FBQUEsSUFDTCxLQUFLO0FBQ0QsYUFBTztBQUFBLElBQ1gsS0FBSztBQUFBLElBQ0wsS0FBSztBQUNELGFBQU87QUFBQSxJQUNYO0FBQ0ksYUFBTztBQUFBLEVBQ1Y7QUFDTDtBQUVPLFNBQVMsb0JBQW9CLE1BQU07QUFDdEMsVUFBUSxNQUFJO0FBQUEsSUFDWixLQUFLO0FBQUEsSUFDTCxLQUFLO0FBQ0QsYUFBTztBQUFBLElBQ1gsS0FBSztBQUFBLElBQ0wsS0FBSztBQUNELGFBQU87QUFBQSxJQUNYO0FBQ0ksYUFBTztBQUFBLEVBQ1Y7QUFDTDtBQUVPLFNBQVMsZ0JBQWdCLE1BQU07QUFDbEMsU0FBTyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxTQUFTLElBQUk7QUFDckM7QUFFTyxTQUFTLHFCQUFxQixNQUFNO0FBQ3ZDLFNBQU8sU0FBUztBQUNwQjtBQUVPLFNBQVMsY0FBYyxNQUFNO0FBQ2hDLFNBQU8sU0FBUztBQUNwQjsifQ==
