import React, { useState } from "react";
import { Box, Button, Grid, Label, Slider, Text } from "theme-ui";
import { Link } from "@reach/router";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Input, Checkbox } from "theme-ui";


export const Filters = ({ sectorName, ...remainingProps }) => {
  return (
    <Box bg={'white'}
      {...remainingProps}
    >
      <Grid
        sx={{
          borderBottom: "1px solid #e5e5e5",
          width: "100%"

        }}
        p={[1, 3]}
        columns={"6fr 3fr"}
      >
        <Text
          mt={2}
          px={1}
          sx={{
            fontSize: "0.8rem",
          }}
        >
          2 filters applied
        </Text>
        <Button
          bg={"white"}
          p={1}
          sx={{
            fontSize: "0.8rem",
            fontWeight: "600",
            color: "rgb(0,0,0)",
          }}
          variant="outlined"
        >
          Reset all
        </Button>
      </Grid>
      <FilterGroup name={"Market Cap"}>
        <MarketCap />
      </FilterGroup>
      <FilterGroup name={"Focus Areas"}>
        <Focus />
      </FilterGroup>
      <FilterGroup name={"Company Type"}>
        <CompanyType sectorName={sectorName} />
      </FilterGroup>
      <FilterGroup name={"Stock Universe"}>
        <StockUniverse />
      </FilterGroup>
      <FilterGroup name={"Close Price (Rs)"}>
        <ClosePrice />
      </FilterGroup>
      <FilterGroup name={"PE Ratio"}>
        <PE_Ratio />
      </FilterGroup>
    </Box >
  );
};

function ClosePrice() {
  return (
    <Box >
      <Slider />
      <Grid
        mt={3}
        columns={3}
        gap={0}
        sx={{
          fontSize: "0.9rem",
        }}
      >
        <Input placeholder="search" bg={"white"} />
        <Text
          sx={{
            textAlign: "center",
            fontSize: "0.9rem",
            paddingTop: "10px",
          }}
        >
          to
        </Text>
        <Input placeholder="search" bg={"white"} />
      </Grid>
      <Grid
        mt={3}
        columns={3}
        gap={0}
        sx={{
          fontSize: "0.9rem",
        }}
      >
        <Button p={2} to={`/`} as={Link} variant="outlined" sx={{
          borderRight: "none",
        }}>
          Small
        </Button>
        <Button p={2} to={`/`} as={Link} variant="outlined" sx={{
          borderRight: "none",
        }}>
          Mid
        </Button>
        <Button p={2} to={`/`} variant="outlined" as={Link}>
          Large
        </Button>
      </Grid>
    </Box>
  );
}

function PE_Ratio() {
  return (
    <Box>
      <Slider />
      <Grid
        mt={3}
        columns={3}
        gap={0}
        sx={{
          fontSize: "0.9rem",
        }}
      >
        <Input placeholder="search" bg={"white"} />
        <Text
          sx={{
            textAlign: "center",
            fontSize: "0.9rem",
            paddingTop: "10px",
          }}
        >
          to
        </Text>
        <Input placeholder="search" bg={"white"} />
      </Grid>
      <Grid
        mt={3}
        columns={3}
        gap={0}
        sx={{
          fontSize: "0.9rem",
        }}
      >
        <Button p={2} to={`/`} as={Link} variant="outlined" sx={{
          borderRight: "none",
        }}>
          Small
        </Button>
        <Button p={2} to={`/`} as={Link} variant="outlined" sx={{
          borderRight: "none",
        }}>
          Mid
        </Button>
        <Button p={2} to={`/`} variant="outlined" as={Link}>
          Large
        </Button>
      </Grid>
    </Box>
  );
}

function StockUniverse() {
  const items = [
    "NIFTY 50",
    "Nifty Midcap 100",
    "NIFTY 100",
    "Nifty Smallcap 100",
    "Nifty 500",
  ];
  return (
    <Box>
      {items.map((res) => {
        return (
          <Label mt={2}>
            <Checkbox sx={{
              cursor: "pointer"
            }} />
            <Text
              sx={{
                fontSize: "0.9rem",
                fontWeight: "400",
                cursor: "pointer"
              }}
            >
              {res}
            </Text>
          </Label>
        );
      })}
    </Box>
  );
}

function FilterGroup({ children, ...remainingProps }) {
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        color: "black",
        borderBottom: "1px solid #e5e5e5",
        cursor: "pointer",
        transition: "height 0.2s",
        "&:hover": { bg: "color2" },
      }}
      bg={open && "color2"}
      p={3}
    >
      <Box
        {...remainingProps}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <Grid columns={["6fr 1fr"]}>
          <Box>{remainingProps.name}</Box>
          <Box mt={1} sx={{
            textAlign: 'right'
          }}>{open ? <FiChevronUp /> : <FiChevronDown />}</Box>
        </Grid>
      </Box>
      {open ? <Box mt={4}>{children}</Box> : null}
    </Box>
  );
}

function MarketCap() {
  return (
    <Box >
      <Slider />

      <Grid
        mt={3}
        columns={3}
        gap={0}
        sx={{
          fontSize: "0.9rem",
        }}
      >
        <Button p={2} to={`/`} as={Link} variant="outlined" sx={{
          borderRight: "none",
        }}>
          Small
        </Button>
        <Button p={2} to={`/`} as={Link} variant="outlined" sx={{
          borderRight: "none",
        }}>
          Mid
        </Button>
        <Button p={2} to={`/`} variant="outlined" as={Link}>
          Large
        </Button>
      </Grid>
    </Box>
  );
}

function Focus() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Box>
      <Input placeholder="search" bg={"white"} />
      <Box mt={3}>
        {items.map(() => {
          return (
            <Label mt={2}>
              <Checkbox sx={{
                cursor: "pointer"
              }} />
              <Text
                sx={{
                  fontSize: "0.9rem",
                  fontWeight: "400",
                  cursor: "pointer"
                }}
              >
                Consumer Discretionary
              </Text>
            </Label>
          );
        })}
      </Box>
    </Box>
  );
}

function CompanyType({ sectorName }) {
  return (
    <Grid
      columns={4}
      gap={0}
      sx={{
        fontSize: "0.9rem",
      }}
    >
      <Button
        p={2}
        to={`/sectors/${sectorName}/all-publicly-listed-companies-in-${sectorName}-sector-india`}
        as={Link}
        variant="outlined" sx={{
          borderRight: "none",
        }}
      >
        Public
      </Button>
      <Button
        p={2}
        to={`/sectors/${sectorName}/all-private-limited-companies-in-${sectorName}-sector-india`}
        as={Link}
        variant="outlined" sx={{
          borderRight: "none",
        }}
      >
        Private
      </Button>
      <Button
        p={2}
        to={`/all-companies-in-${sectorName}-india`}
        variant="outlined"
        as={Link} sx={{
          borderRight: "none",
        }}
      >
        All
      </Button>
      <Button
        p={2}
        to={`/all-startup-companies-in-${sectorName}-india`}
        variant="outlined"
        as={Link}
      >
        Startup
      </Button>
    </Grid>
  );
}
