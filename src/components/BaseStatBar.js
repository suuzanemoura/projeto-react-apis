import { Box, GridItem, Progress, Text } from "@chakra-ui/react";

export function BaseStatBar({ value, name, stats }) {
  const getStatName = (name) => {
    switch (name) {
      case "hp":
        return "HP";
      case "special-attack":
        return "Sp. Atk";
      case "special-defense":
        return "Sp. Def";
      case "attack":
        return "Attack";
      case "defense":
        return "Defense";
      case "speed":
        return "Speed";
      default:
        return name;
    }
  };

  return (
    <>
      {name !== "total" ? (
        <GridItem>
          <Box
            display={"grid"}
            gridTemplateColumns={{
              base: "2fr 1fr 3fr",
              md: "2fr 1fr 5fr",
              lg: "3.75rem 2.125rem 1fr",
            }}
            alignItems={"center"}
            w={"100%"}
            h={"28px"}
            gap={"1rem"}
            borderTop={"1px solid RGBA(0, 0, 0, 0.06)"}
          >
            <Text
              fontSize={{ base: "12px", md: "14px" }}
              col={1}
              justifySelf={"right"}
              color={"RGBA(0, 0, 0, 0.48)"}
            >
              {getStatName(name)}
            </Text>
            <Text
              fontSize={{ base: "12px", md: "14px" }}
              col={2}
              justifySelf={"center"}
            >
              {value}
            </Text>
            <Box justifySelf={"left"} w={"100%"}>
              <Progress
                value={value}
                borderRadius={"3px"}
                col={3}
                variant={value > 79 ? "blue" : value > 49 ? "yellow" : "orange"}
              />
            </Box>
          </Box>
        </GridItem>
      ) : (
        <>
          <GridItem>
            <Box
              display={"grid"}
              gridTemplateColumns={{
                base: "2fr 1fr 3fr",
                md: "2fr 1fr 5fr",
                lg: "3.75rem 2.125rem 1fr",
              }}
              alignItems={"center"}
              w={"100%"}
              h={"28px"}
              gap={"1rem"}
              borderY={"1px solid RGBA(0, 0, 0, 0.06)"}
            >
              <Text
                fontSize={{ base: "12px", md: "14px" }}
                col={1}
                justifySelf={"right"}
                color={"RGBA(0, 0, 0, 0.48)"}
              >
                Total
              </Text>
              <Text
                fontSize={{ base: "12px", md: "14px" }}
                col={2}
                justifySelf={"center"}
                fontWeight={"700"}
              >
                {stats.reduce((acc, stat) => {
                  return (acc += stat.base_stat);
                }, 0)}
              </Text>
            </Box>
          </GridItem>
        </>
      )}
    </>
  );
}
