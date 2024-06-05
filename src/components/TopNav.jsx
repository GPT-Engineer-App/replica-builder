import { Box, Button, Flex, IconButton, Input, Select } from "@chakra-ui/react";
import { FaBell, FaQuestionCircle, FaUserCircle } from "react-icons/fa";

const TopNav = () => {
  return (
    <Box
      w="100%"
      bg="white"
      p={4}
      borderBottom="1px solid"
      borderColor="gray.200"
    >
      <Flex justify="space-between" align="center">
        <Flex align="center">
          <Input placeholder="Search" w="200px" mr={4} />
          <Select placeholder="Category" w="150px" mr={4}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </Select>
          <Button mr={2}>Filter</Button>
          <Button>Sort</Button>
        </Flex>
        <Flex align="center">
          <Button mr={4}>+ Add report</Button>
          <IconButton
            aria-label="Help"
            icon={<FaQuestionCircle />}
            variant="ghost"
            mr={2}
          />
          <IconButton
            aria-label="Notifications"
            icon={<FaBell />}
            variant="ghost"
            mr={2}
          />
          <IconButton
            aria-label="User Profile"
            icon={<FaUserCircle />}
            variant="ghost"
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default TopNav;