import { Request, Response} from 'express';

export const home = (req: Request, res: Response) => {
  res.render("pages/index", {
    banner: {
      title: "Todos os animais",
      background: "all-animals.png"
    }
  });
};

export const dogs = (req: Request, res: Response) => {
  res.render("pages/index", {
    banner: {
      title: "Cachorros",
      background: "dogs.jpg"
    }
  });
};

export const cats = (req: Request, res: Response) => {
  res.render("pages/index", {
    banner: {
      title: "Gatos",
      background: "cats.png"
    }
  });
};

export const fishes = (req: Request, res: Response) => {
  res.render("pages/index", {
    banner: {
      title: "Peixes",
      background: "fishes.png"
    }
  });
};