class Room {
    constructor(name, capacity, checkinDate) {
      this.name = name;
      this.capacity = capacity;
      this.checkinDate = checkinDate;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      this._name = value;
    }
  
    get capacity() {
      return this._capacity;
    }
  
    set capacity(value) {
      if (value <= 0) {
        throw new Error('Capacity must be greater than 0');
      }
      this._capacity = value;
    }
  
    get checkinDate() {
      return this._checkinDate;
    }
  
    set checkinDate(value) {
      this._checkinDate = new Date(value);
    }
  
    // Other methods
    serialize() {
      return {
        name: this.name,
        capacity: this.capacity,
        checkinDate: this.checkinDate.toISOString(),
      };
    }
  }
  