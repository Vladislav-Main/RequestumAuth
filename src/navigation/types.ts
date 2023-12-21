import {
  ParamListBase,
  RouteConfig,
  StackNavigationState,
} from '@react-navigation/native';
import {
  StackNavigationEventMap,
  StackNavigationOptions,
} from '@react-navigation/stack';

export type StackRoutesType<ParamList extends ParamListBase> = Array<
  RouteConfig<
    ParamList,
    keyof ParamList,
    StackNavigationState<ParamList>,
    StackNavigationOptions,
    StackNavigationEventMap
  >
>;

// becomes one line typings for each stack
export type AppStackRoutesType = StackRoutesType<ParamListBase>;
// export type OtherStackRoutesType = StackRoutesType<OtherStackParamList>;
// export type AnotherStackRoutesType = StackRoutesType<AnotherStackParamList>;
