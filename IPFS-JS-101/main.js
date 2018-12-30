const ipfs = require('ipfs');

const node = new ipfs();

node.on('ready', async () => {
    console.log("Server Started");
    // wait for node to come up
    const version = await node.version();
    console.log(version.version);

    const filesAdded = await node.files.add({
        path: 'hello.txt',
        // we have to use buffer with ipfs files add
        content: Buffer.from("Hello World")
    });
    // print file name and hash generated
    console.log("Added file: " + filesAdded[0].path );
    console.log("Hash: " + filesAdded[0].hash );

    // reading data back on IPFS
    console.log("Getting file contents from IPFS");
    const filesBuffer = await node.files.cat(filesAdded[0].hash);
    console.log("reading value from ipfs: " + filesBuffer)
});
// file is available 
//https://gateway.ipfs.io/ipfs/QmUXTtySmd7LD4p6RG6rZW6RuUuPZXTtNMmRQ6DSQo3aMw

