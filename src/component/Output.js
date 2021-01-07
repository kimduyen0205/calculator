import React, { useEffect, useState, useRef } from "react";

const Output = () => {
  const inputRefA = useRef(null);
  const inputRefB = useRef(null);
  const [valueA, setValueA] = useState("");
  const [valueB, setValueB] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState(0);

  useEffect(() => {
    inputRefA.current.focus();
    inputRefB.current.focus();
  }, [inputRefA, inputRefB]);

  const handleOperatorChange = (e) => {
    let pt = e.target.value;
    setOperator(pt);
    let results = 0;
    if (pt === "+") {
      results = parseInt(valueA) + parseInt(valueB);
      setResult(results);
    } else if (pt === "-") {
      results = parseInt(valueA) - parseInt(valueB);
      setResult(results);
    } else if (pt === "*") {
      results = parseInt(valueA) * parseInt(valueB);
      setResult(results);
    } else if (pt === "/") {
      results = parseInt(valueA) / parseInt(valueB);
      setResult(results);
    } else {
      console.log("Opp!!!");
    }
  };
  return (
    <div>
      <h1>Máy tính đơn giản</h1>
      <div>
        Nhập số a:
        <input
          ref={inputRefA}
          value={valueA}
          onChange={(e) => setValueA(e.target.value)}
        />
      </div>
      <div>
        Nhập số b:
        <input
          ref={inputRefB}
          value={valueB}
          onChange={(e) => setValueB(e.target.value)}
        />
      </div>
      <div>
        <select value={operator} onChange={(e) => handleOperatorChange(e)}>
          <option value="">Lựa chọn phép tính:</option>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
      </div>
      <p>
        <strong>Kết quả:</strong> {result}
      </p>
    </div>
  );
};

export default Output;
