export const groups = [
  {
    id: "1a6e0804-2bd0-4672-b79d-d97027f9071g",
    name: "Hiking",
    description: "Great outdoors",
    users: ["1a6e0804-2bd0-4672-b79d-d97027f9071u"],
  },
  {
    id: "2a6e0804-2bd0-4672-b79d-d97027f9071g",
    name: "Cooking",
    description: "Try new dishes",
    users: [
      "2a6e0804-2bd0-4672-b79d-d97027f9071u",
      "3a6e0804-2bd0-4672-b79d-d97027f9071u",
    ],
  },
  {
    id: "3a6e0804-2bd0-4672-b79d-d97027f9071g",
    name: "Dog walking",
    description: "Take your pet to the park",
    users: [
      "3a6e0804-2bd0-4672-b79d-d97027f9071u",
      "1a6e0804-2bd0-4672-b79d-d97027f9071u",
    ],
  },
];

export const users = [
  {
    id: "1a6e0804-2bd0-4672-b79d-d97027f9071u",
    first_name: "Anna",
    last_name: "Smith",
    bio: "Lovely, friendly person",
    groups: [
      "1a6e0804-2bd0-4672-b79d-d97027f9071g",
      "2a6e0804-2bd0-4672-b79d-d97027f9071g",
    ],
  },
  {
    id: "2a6e0804-2bd0-4672-b79d-d97027f9071u",
    first_name: "Lea",
    last_name: "Logan",
    bio: "Hardworking individual",
    groups: ["1a6e0804-2bd0-4672-b79d-d97027f9071g"],
  },
  {
    id: "3a6e0804-2bd0-4672-b79d-d97027f9071u",
    first_name: "Adam",
    last_name: "Great",
    bio: "Freelance worker, love sports",
    groups: ["1a6e0804-2bd0-4672-b79d-d97027f9071g"],
  },
];
