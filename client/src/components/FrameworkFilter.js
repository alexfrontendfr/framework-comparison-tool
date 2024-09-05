import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../theme";

const FilterContainer = styled.div`
  margin-bottom: 24px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 1rem;
  border: 1px solid ${theme.colors.primary};
  border-radius: 4px;
`;

const FrameworkFilter = ({ frameworks, setFilteredFrameworks }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = frameworks.filter((framework) =>
      framework.name.toLowerCase().includes(term)
    );
    setFilteredFrameworks(filtered);
  };

  return (
    <FilterContainer>
      <Input
        type="text"
        placeholder="Search frameworks..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </FilterContainer>
  );
};

export default FrameworkFilter;
