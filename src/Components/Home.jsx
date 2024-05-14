import CryptoJS from "crypto-js";
import React, { useState } from "react";

const Home = () => {

  const SECRECT_KEY = "hakunamatata!!";
  
  const [inputData, setInputData] = useState("");
  const [encryptedData, setEncryptedData] = useState("");
  const [decreptedData, setDecreptedData] = useState("");
  const [showData, setShowData] = useState(false);

  const encryptDisable = inputData ? false : true;
  const decryptDisable = encryptedData ? false : true;
  const inputDisable = inputData ? false : true;

  const handleEncrypt = () => {
    const encData = CryptoJS.AES.encrypt(inputData, SECRECT_KEY).toString();
    setEncryptedData(encData);
    setShowData(true);
  };

  const handleDecrypt = () => {
    console.log(encryptedData);
    const bytes = CryptoJS.AES.decrypt(encryptedData, SECRECT_KEY).toString(
      CryptoJS.enc.Utf8
    );
    setDecreptedData(bytes);
    setShowData(false);
  };

  const handleClear = () => {
    setDecreptedData("");
    setEncryptedData("");
    setShowData(false);
    setInputData("");
  };

  return (
    <div className="h-screen bg-gray-900 text-gray-100 flex flex-col justify-center items-center">
      <section className="h-3/5 w-2/4 flex flex-col justify-evenly items-center p-2">
        <h2 className="text-4xl font-light text-gray-500">Encryption & Decryption</h2>
        <textarea
          onChange={(e) => {
            setInputData(e.target.value);
          }}
          value={(showData ? encryptedData : decreptedData) || inputData}
          placeholder="Enter or Paste Data..."
          className="h-3/6 w-full border border-dashed rounded-lg border-gray-400 bg-transparent caret-transparent text-3xl text-center p-2 font-thin "
          type="text"
        />
        <div className="flex gap-5">
          <button
            disabled={encryptDisable}
            onClick={handleEncrypt}
            className={
              encryptDisable
                ? "text-gray-500 px-5 py-1 uppercase font-semibold border-2 border-gray-500 rounded"
                : "px-5 hover:text-zinc-400 transition py-1 uppercase font-semibold border-2 border-gray-500 rounded "
            }
          >
            Encrypt
          </button>
          <button
            onClick={handleDecrypt}
            disabled={decryptDisable}
            className={
                decryptDisable
                ? "text-gray-500 px-5 py-1 uppercase font-semibold border-2 border-gray-500 rounded"
                : "px-5 hover:text-zinc-400 transition py-1 uppercase font-semibold border-2 border-gray-500 rounded "
            }
          >
            Decrypt
          </button>
          <button
            disabled={inputDisable}
            className={
                inputDisable
                ? "text-gray-500 px-5 py-1 uppercase font-semibold border-2 border-gray-500 rounded"
                : "px-5 hover:text-zinc-400 transition py-1 uppercase font-semibold border-2 border-gray-500 rounded "
            }
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
