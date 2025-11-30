import { Request, Response} from 'express';
import { Pet } from "../models/pets";

export const home = (req: Request, res: Response) => {
  let list = Pet.getAll();

  res.render("pages/index", {
    banner: {
      title: "Todos os animais",
      background: "all-animals.png"
    },
    list,
    isAll: true
  });
};

export const dogs = (req: Request, res: Response) => {
  let list = Pet.getByType("dog");

  res.render("pages/index", {
    banner: {
      title: "Cachorros",
      background: "dogs.jpg"
    },
    list,
    isDog: true
  });
};

export const cats = (req: Request, res: Response) => {
  let list = Pet.getByType("cat");

  res.render("pages/index", {
    banner: {
      title: "Gatos",
      background: "cats.png"
    },
    list,
    isCat: true
  });
};

export const fishes = (req: Request, res: Response) => {
  let list = Pet.getByType("fish");

  res.render("pages/index", {
    banner: {
      title: "Peixes",
      background: "fishes.png"
    },
    list,
    isFish: true
  });
};