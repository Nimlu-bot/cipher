# Cipher

This app is for encryption and decryption files or user unput.

tool accepts 3 options: config, input file and output file. Config is required and it format is {XY(-)}n where X - cipher(A-atbash, C-caesar, R-ROT-8) Y- direction ( 0- encode or 1-decode), see example.  Input file and output file are optional. If missing then use sdtin/stdout.

1. Clone repo or copy and extract files.
2. Go to the app folder.
3. In folder where located package.json run ``` npm i```.
4. run 
```bash
node .\app.js -c "config" -i "path to input file" -o "pass to ouput file"
```
where "config" - config kind "C1-C1-R0-A", path to input file and pass to ouput file are pathes to files in file system.



**Usage example:**  

```bash
$ node .\app.js -c "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!`

```bash
$ node .\app.js -c "C1-C0-A-R1-R0-A-R0-R0-C1-A" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!`

```bash
$ node .\app.js -c "A-A-A-R1-R0-R0-R0-C1-C1-A" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Hvwg wg gsqfsh. Asggous opcih "_" gmapcz!`

```bash
$ node .\app.js -c "C1-R1-C0-C0-A-R0-R1-R1-A-C1" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `This is secret. Message about "_" symbol!`
