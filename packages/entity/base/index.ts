interface baseProp{
  name:string
}

interface baseListProp{
  data:baseProp[]
}

export interface PostCRUD {
    createBase()
	createBaseList()
	updateBase()
	updateBaseList()
	deleteBase()
	deleteBaseList()
    getBaes()
	getBaseList()
}




