import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryList'
})

export class CategoryPipe implements PipeTransform {
  transform(pipeData, pipeModifier) {
    if (pipeModifier) {
      return pipeData.filter((eachItem)=> {
        return eachItem['category'].includes(pipeModifier)
      })
    } else {
      return pipeData.filter((eachItem)=> {
        return eachItem
      })
    }
  }
}
