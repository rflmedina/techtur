import {
  HiArrowDown,
  HiArrowRight,
  HiLocationMarker,
  HiClock,
} from "react-icons/hi";
import styled from "styled-components";

const defaultConfig = (props: IconInterface) => ({
  size: props.size ? props.size : 32,
});

interface IconInterface {
  color?: string;
  size?: string;
}

export const ArrowRightIcon = styled(HiArrowRight).attrs(defaultConfig)`
  color: ${({ color }: IconInterface) => color || "#00000"};
`;

export const ArrowDownIcon = styled(HiArrowDown).attrs(defaultConfig)`
  color: ${({ color }: IconInterface) => color || "#00000"};
`;

export const LocationMarkerIcon = styled(HiLocationMarker).attrs(defaultConfig)`
  color: ${({ color }: IconInterface) => color || "#24b0ff"};
`;

export const ClockIcon = styled(HiClock).attrs(defaultConfig)`
  color: ${({ color }: IconInterface) => color || "#00000"};
  height: 2.5rem;
`;
