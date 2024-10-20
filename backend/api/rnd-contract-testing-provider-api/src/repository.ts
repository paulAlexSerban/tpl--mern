type Entity = {
    firstName: string
    lastName: string
    age: number
    id: number
}

type RepositoryType = {
    entities: Entity[]
    fetchAll: () => Entity[]
    getById: (id: number) => Entity | string
    add: (entity: Entity) => void
    clear: () => void
}


class Repository implements RepositoryType {
    entities: Entity[]

    constructor() {
      this.entities = []
    }
  
    fetchAll() {
      return this.entities
    }
  
    getById(id: number) {
      const entity = this.entities.find(entity => id == entity.id)
      if (!entity) {
        return 'Entity not found!'
      }
      return entity;
    }
  
    add(entity: Entity) {
      this.entities.push(entity)
    }
  
    clear() {
      this.entities = []
    }
  }
  
export default Repository