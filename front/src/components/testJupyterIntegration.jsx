//import React, { useState, useEffect } from 'react';
////import { XMLHttpRequest } from "xmlhttprequest";
////import { default as WebSocket } from 'ws';
//import {
//  KernelMessage, Kernel
//} from 'jupyter-js-services';

//const TestJupyterIntegration = () => {

//  const BASE_URL = 'http://localhost:8888';


//  useEffect(() => {(async () =>  {

//    let runningKernels = await Kernel.listRunning({ baseUrl: BASE_URL })
//    let kernel;

//    // check if there are any running kernels
//    // while dealing w. aync

//    if (runningKernels.length === 0) {

//      kernel = await Kernel.startNew({ baseUrl: BASE_URL, name: "python3" });

//    } else {

//      kernel = await Kernel.connectTo(
//        runningKernels[0].id,
//        { 
//          baseUrl: BASE_URL, name: runningKernels[0].name
//        }
//      );

//    }

//    let future = kernel.execute({ code: 'a = 1' } );

//    future.onIOPub = (msg) => {
//      console.log(msg.content);  // Print rich output data.
//    };

//    kernel.inspect


//  })()},[]);

//  //const [code, setCode] = useState('');
//  //const [output, setOutput] = useState('');

//  //const executePythonCode = async () => {
//  //  try {
//  //    console.log('ss');
//  //    // Start a new kernel
//  //    const kernelResponse = await fetch('http://localhost:8888/api/kernels', {
//  //      method: 'POST',
//  //      //mode: 'no-cors',
//  //      headers: {
//  //        'Content-Type': 'application/json',
//  //        'Authorization': `token 55bedbc891651fa8102cf1e3f8c355c3a615f6595c772fcc`, // Your Jupyter token
//  //        //'Access-Control-Allow-Origin': '*',
//  //        //'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//  //        //'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
//  //        //'Access-Control-Allow-Credentials': 'true',
//  //      },
//  //      body: JSON.stringify({
//  //        name: "python3"
//  //      }),
//  //    });
//  //    const kernel = await kernelResponse.json();
//  //    console.log('Kernel:', kernel);

//  //    // Execute code in the kernel
//  //    const sessionId = kernel.id;
//  //    const executeResponse = await fetch(`http://localhost:8888/api/kernels/${sessionId}/execute`, {
//  //      method: 'POST',
//  //      mode: 'no-cors',
//  //      headers: {
//  //        'Content-Type': 'application/json',
//  //        'Authorization': `token 55bedbc891651fa8102cf1e3f8c355c3a615f6595c772fcc`, // Your Jupyter token
//  //        // solve the CORS issue
//  //        //'Access-Control-Allow-Origin': '*',
//  //        //'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//  //        //'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
//  //        //'Access-Control-Allow-Credentials': 'true',


//  //      },
//  //      body: JSON.stringify({
//  //        code: code,
//  //      }),
//  //    });
//  //    const result = await executeResponse.json();

//  //    // Display output (simplified)
//  //    // Note: Proper output handling would require parsing Jupyter's message format
//  //    setOutput(JSON.stringify(result, null, 2));
//  //  } catch (error) {
//  //    console.error('Error executing Python code:', error);
//  //    setOutput('Error executing Python code. See console for details.');
//  //  }
//  //};

//  //return (
//  //  <div>
//  //    <h2>Python Code Executor</h2>
//  //    <textarea
//  //      rows="4"
//  //      cols="50"
//  //      placeholder="Enter Python code here..." value={code} onChange={(e) => setCode(e.target.value)} />
//  //    <br />
//  //    <button onClick={executePythonCode}>Run Code</button>
//  //    <h3>Output:</h3>
//  //    <pre>{output}</pre>
//  //  </div>
//  //);


//    return (
//      <>
//      sssss
//      </>
//    )
//}

//export default TestJupyterIntegration;




import React, { useState, useEffect } from 'react';
import { Kernel, KernelMessage } from '@jupyterlab/services';
import { PageConfig } from '@jupyterlab/coreutils';

const TestJupyterIntegration = () => {
  console.log(services);

  useEffect(() => {(async () => {

    const kernelManager
//https://github.com/jupyterlab/jupyterlab/tree/16ba221bff4ea02880fc5bae99b5e8dbe635e17f/packages/services/examples/browser-require
    //https://github.com/jupyterlab/jupyterlab/blob/16ba221bff4ea02880fc5bae99b5e8dbe635e17f/packages/services/examples/browser-require/static/index.js
    //https://github.com/jupyterlab/jupyterlab-data-explorer/blob/421782bbd1f0fe2ad67e974f7a3daa533a1662b7/tests/test-services/src/kernel/ikernel.spec.ts#L188
  })(); }, [])

  return (
    <>
    </>
  )
}


export default TestJupyterIntegration;


