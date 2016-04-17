let myTest = {

 a: '1',

 b: 3,

 c( arg='testing' ) { 

 console.log(`a=${this.a} and b=${this.b} and arg=${arg}`) 

 }

}

myTest.c()

myTest.c( 'test blargh' )