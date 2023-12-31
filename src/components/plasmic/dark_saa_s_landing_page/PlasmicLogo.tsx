// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6sLF4jL9fG9cRZGNCHJDct
// Component: thHP_e-vqtZr

import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_dark_saa_s_landing_page.module.css"; // plasmic-import: 6sLF4jL9fG9cRZGNCHJDct/projectcss
import sty from "./PlasmicLogo.module.css"; // plasmic-import: thHP_e-vqtZr/css

import logopngVGRcQozzmVvo from "./images/logopng.png"; // plasmic-import: vGRcQozzmVvo/picture
import lineBranchpng4F4UlFdcXOg from "./images/lineBranchpng.png"; // plasmic-import: 4F4ULFdcX_Og/picture

createPlasmicElementProxy;

export type PlasmicLogo__VariantMembers = {
  _50Opaque: "_50Opaque";
  smallLogo: "smallLogo";
};
export type PlasmicLogo__VariantsArgs = {
  _50Opaque?: SingleBooleanChoiceArg<"_50Opaque">;
  smallLogo?: SingleBooleanChoiceArg<"smallLogo">;
};
type VariantPropType = keyof PlasmicLogo__VariantsArgs;
export const PlasmicLogo__VariantProps = new Array<VariantPropType>(
  "_50Opaque",
  "smallLogo"
);

export type PlasmicLogo__ArgsType = {};
type ArgPropType = keyof PlasmicLogo__ArgsType;
export const PlasmicLogo__ArgProps = new Array<ArgPropType>();

export type PlasmicLogo__OverridesType = {
  root?: p.Flex<"a">;
  img?: p.Flex<typeof p.PlasmicImg>;
};

export interface DefaultLogoProps {
  _50Opaque?: SingleBooleanChoiceArg<"_50Opaque">;
  smallLogo?: SingleBooleanChoiceArg<"smallLogo">;
  className?: string;
}

const $$ = {};

function PlasmicLogo__RenderFunc(props: {
  variants: PlasmicLogo__VariantsArgs;
  args: PlasmicLogo__ArgsType;
  overrides: PlasmicLogo__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof p.useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "_50Opaque",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props._50Opaque
      },
      {
        path: "smallLogo",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.smallLogo
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <a
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        { [sty.root_50Opaque]: hasVariant($state, "_50Opaque", "_50Opaque") }
      )}
      href={`/`}
    >
      <p.PlasmicImg
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(sty.img, {
          [sty.img_50Opaque]: hasVariant($state, "_50Opaque", "_50Opaque"),
          [sty.imgsmallLogo]: hasVariant($state, "smallLogo", "smallLogo")
        })}
        displayHeight={"100%"}
        displayMaxHeight={"none"}
        displayMaxWidth={
          hasVariant($state, "smallLogo", "smallLogo") ? "50px" : "none"
        }
        displayMinHeight={"0"}
        displayMinWidth={"0"}
        displayWidth={"100%"}
        src={
          hasVariant($state, "smallLogo", "smallLogo")
            ? {
                src: lineBranchpng4F4UlFdcXOg,
                fullWidth: 100,
                fullHeight: 100,
                aspectRatio: undefined
              }
            : {
                src: logopngVGRcQozzmVvo,
                fullWidth: 224,
                fullHeight: 50,
                aspectRatio: undefined
              }
        }
      />
    </a>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "a";
  img: typeof p.PlasmicImg;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLogo__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLogo__VariantsArgs;
    args?: PlasmicLogo__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLogo__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicLogo__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicLogo__ArgProps,
          internalVariantPropNames: PlasmicLogo__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLogo__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLogo";
  } else {
    func.displayName = `PlasmicLogo.${nodeName}`;
  }
  return func;
}

export const PlasmicLogo = Object.assign(
  // Top-level PlasmicLogo renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicLogo
    internalVariantProps: PlasmicLogo__VariantProps,
    internalArgProps: PlasmicLogo__ArgProps
  }
);

export default PlasmicLogo;
/* prettier-ignore-end */
