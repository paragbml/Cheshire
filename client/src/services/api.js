// Local storage keys
const PEOPLE_STORAGE_KEY = 'cheshire_people';

// Load people from localStorage
export const getAllPeople = () => {
  const stored = localStorage.getItem(PEOPLE_STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

// Save people to localStorage
const savePeople = (people) => {
  localStorage.setItem(PEOPLE_STORAGE_KEY, JSON.stringify(people));
};

// Add or update a person
export const savePerson = (person) => {
  const people = getAllPeople();
  if (person.id) {
    // Update existing person
    const index = people.findIndex(p => p.id === person.id);
    if (index !== -1) {
      people[index] = person;
    }
  } else {
    // Add new person with unique ID
    person.id = Date.now().toString();
    people.push(person);
  }
  savePeople(people);
  return person;
};

// Delete a person
export const deletePerson = (id) => {
  const people = getAllPeople();
  const filteredPeople = people.filter(person => person.id !== id);
  savePeople(filteredPeople);
};

// Get a person by ID
export const getPerson = (id) => {
  const people = getAllPeople();
  return people.find(person => person.id === id);
};