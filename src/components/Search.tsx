import React, { useRef } from "react";
import { Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { EditIcon } from "@chakra-ui/icons"
import "./styles.css";

interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const Search: React.FC<props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <InputGroup>
                <InputLeftElement pointerEvents='none' children={<EditIcon />} />
                <Input
                    type="text"
                    placeholder="Enter a Task"
                    value={todo}
                    ref={inputRef}
                    onChange={(e) => setTodo(e.target.value)}
                    className="input__box"
                />
            </InputGroup>
            <Button type="submit" colorScheme='yellow' variant='solid'>
                Add
            </Button>
    </form>
  );
};

export default Search;