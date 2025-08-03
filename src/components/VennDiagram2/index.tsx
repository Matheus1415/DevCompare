import { Paper, Title, Box, Stack } from "@mantine/core";

interface VennDiagram2Props {
  setA: number;
  setB: number;
  intersectionSize: number;
}

export function VennEquality({ size = 80 }: { size?: number }) {
  const center = { x: 160, y: 120 };

  return (
    <Paper  radius="md" p="lg">
      <Stack align="center" spacing="md">
        <Box w={320} h={240}>
          <svg width="320" height="240">
            <circle
              cx={center.x}
              cy={center.y}
              r={size}
              fill="rgba(0, 128, 255, 0.3)"
              stroke="blue"
              strokeWidth="2"
            />
            <text x={center.x - 20} y={center.y - size - 10} fontSize="14" fill="blue">
              A = B
            </text>
          </svg>
        </Box>
      </Stack>
    </Paper>
  );
}

export function VennIntersection({ setA, setB, intersectionSize }:VennDiagram2Props) {
  const radius = 80;
  const centerA = { x: 120, y: 120 };
  const centerB = { x: 200, y: 120 };

  return (
    <Paper  radius="md" p="lg" >
      <Stack align="center" spacing="md">
        <Box w={320} h={240}>
          <svg width="320" height="240">
            <circle
              cx={centerA.x}
              cy={centerA.y}
              r={radius}
              fill="rgba(255, 0, 0, 0.5)"
              stroke="red"
              strokeWidth="2"
            />
            <circle
              cx={centerB.x}
              cy={centerB.y}
              r={radius}
              fill="rgba(0, 0, 255, 0.3)"
              stroke="blue"
              strokeWidth="2"
            />
            <text x={centerA.x - 50} y={centerA.y} fontSize="18" fill="red">
              A: {setA}
            </text>
            <text x={centerB.x + 10} y={centerB.y} fontSize="18" fill="blue">
              B: {setB}
            </text>
            <text x={155} y={centerA.y + 10} fontSize="20" fill="purple">
             {intersectionSize}
            </text>
          </svg>
        </Box>
      </Stack>
    </Paper>
  );
}

export function VennDifference({ setA, differenceSize,setB }: { setA: number; differenceSize: number;setB:number }) {
  const radius = 80;
  const centerA = { x: 120, y: 120 };
  const centerB = { x: 200, y: 120 };

  return (
    <Paper  radius="md" p="lg" >
      <Stack align="center" spacing="md">
        <Box w={320} h={240}>
          <svg width="320" height="240">
            <circle
              cx={centerA.x}
              cy={centerA.y}
              r={radius}
              fill="rgba(255, 165, 0, 0.5)"
              stroke="orange"
              strokeWidth="2"
            />
            <circle
              cx={centerB.x}
              cy={centerB.y}
              r={radius}
              fill="rgba(0, 0, 255, 0.1)"
              stroke="blue"
              strokeWidth="2"
            />
            <text x={centerA.x - 50} y={centerA.y} fontSize="20" fill="orange">
              A: {setA}
            </text>
            <text x={centerB.x + 10} y={centerB.y} fontSize="20" fill="blue">
              B: {setB}
            </text>
            <text x={130} y={centerA.y + 4} fontSize="16" fill="black">
              A − B: {differenceSize}
            </text>
          </svg>
        </Box>
      </Stack>
    </Paper>
  );
}
