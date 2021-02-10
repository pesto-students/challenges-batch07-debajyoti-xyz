# Git Excercise insights

Git maintains an object database, where each object is a single binary file (blob) and its name is the SHA-1 hash of the file.
We can see it as a key-value storage where keys are SHA-1 hash and values can file content, directory tree, commit metadata etc. along with its type.

These blobs are stored in .git/objects directory.
 
## ref's

In .git/refs diretory git store sha-1 of latest commits of each branch & tags.
In .git/refs/tags diretory git store sha-1 of each tag
In .git/refs/heads diretory git store sha-1 of lastest commit of each branch

In hooks directory, there are scripts that will be triggered with the git event of same name. e.g, We can add a script(.git/hooks/pre-commit) which runs the test 
when just before commiting.

**Hashing objects**

We can use 
```shell
$ echo 'Hello, World!' | git hash-object --stdin
```

to get the hash of the blob which is equivalent to ` $ echo 'blob 14\0Hello, World!' | openssl sha1`

### Hard way to do `git add`

**`git add sample.txt` ==> `git hash-object -w sample.txt`**

`git hash-object` returns the SHA-1 checksum which is generated using the content and few metadata
like size, filename etc. The `-w` arg also writes the metadata & content in the .git/objects folder.
The above command generate a file `.git/objects/3b/18e512dba79e4c8300dd08aeb37f8e728b8dad` 
This is how Git stores the content initially, as a single file per piece of content, named with the SHA-1 checksum of the content and its header. 
The subdirectory is named with the first 2 characters of the SHA-1, and the filename is the remaining 38 characters.


`$ cat .git/objects/3b/18e512dba79e4c8300dd08aeb37f8e728b8dad`==>
`xK��OR04b�H���W(�/�I�D�` 
Since git stores the file and its metadata in binary we cannot directly cat the file and see its content.

We need to use `git cat-file -p 3b18e512dba79e4c8300dd08aeb37f8e728b8dad`. `-p` is for pretty printing the content. `-t` is for type.


### ls-files

`git ls-files` shows information about files in the index and the working tree.
We can use `-s` switch to list stages files. i.e. `git ls-files -s`

### reset

We can use `git reset HEAD` to undo the staging area to the lastest commit.

### stage

`git stash save <stage-name>` saves currently staged file to staging area and resets the current working directory to latest commit.