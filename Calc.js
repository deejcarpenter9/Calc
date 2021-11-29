function plus(){
            var _num1 = parseInt(document.getElementById("num1").value);
            var _num2 = parseInt(document.getElementById("num2").value);
            document.getElementById("answer").innerHTML = _num1 + _num2;
        }
        function minus(){
            var _num1 = parseInt(document.getElementById("num1").value);
            var _num2 = parseInt(document.getElementById("num2").value);
            document.getElementById("answer").innerHTML = _num1 - _num2;
        }
        function times(){
            var _num1 = parseInt(document.getElementById("num1").value);
            var _num2 = parseInt(document.getElementById("num2").value);
            document.getElementById("answer").innerHTML = _num1 * _num2;
        }
        function divide(){
            var _num1 = parseInt(document.getElementById("num1").value);
            var _num2 = parseInt(document.getElementById("num2").value);
            document.getElementById("answer").innerHTML = _num1 / _num2;
        }