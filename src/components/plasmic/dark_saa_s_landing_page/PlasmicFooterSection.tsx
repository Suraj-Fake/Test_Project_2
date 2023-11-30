// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6sLF4jL9fG9cRZGNCHJDct
// Component: 4hxZNrh6Brv5

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
import Logo from "../../Logo"; // plasmic-import: thHP_e-vqtZr/component
import Button from "../../Button"; // plasmic-import: IJxXxfpIqlWa/component

import { useScreenVariants as useScreenVariantssvfCne9I6Cxu } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: SVFCne9i6CXU/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_dark_saa_s_landing_page.module.css"; // plasmic-import: 6sLF4jL9fG9cRZGNCHJDct/projectcss
import sty from "./PlasmicFooterSection.module.css"; // plasmic-import: 4hxZNrh6Brv5/css

import FacebooksvgIcon from "./icons/PlasmicIcon__Facebooksvg"; // plasmic-import: KAU-lxfrcb5n/icon
import TwittersvgIcon from "./icons/PlasmicIcon__Twittersvg"; // plasmic-import: Ceg6hBlf9QgJ/icon
import InstagramsvgIcon from "./icons/PlasmicIcon__Instagramsvg"; // plasmic-import: 7nzJz3a_JZx1/icon
import LinkedinsvgIcon from "./icons/PlasmicIcon__Linkedinsvg"; // plasmic-import: ioGA182YcNxK/icon

createPlasmicElementProxy;

export type PlasmicFooterSection__VariantMembers = {};
export type PlasmicFooterSection__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooterSection__VariantsArgs;
export const PlasmicFooterSection__VariantProps = new Array<VariantPropType>();

export type PlasmicFooterSection__ArgsType = {};
type ArgPropType = keyof PlasmicFooterSection__ArgsType;
export const PlasmicFooterSection__ArgProps = new Array<ArgPropType>();

export type PlasmicFooterSection__OverridesType = {
  root?: p.Flex<"div">;
  columns?: p.Flex<"div">;
  logo?: p.Flex<typeof Logo>;
};

export interface DefaultFooterSectionProps {
  className?: string;
}

const $$ = {};

function PlasmicFooterSection__RenderFunc(props: {
  variants: PlasmicFooterSection__VariantsArgs;
  args: PlasmicFooterSection__ArgsType;
  overrides: PlasmicFooterSection__OverridesType;
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantssvfCne9I6Cxu()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__lCq)}
      >
        <div
          data-plasmic-name={"columns"}
          data-plasmic-override={overrides.columns}
          className={classNames(projectcss.all, sty.columns)}
        >
          <div className={classNames(projectcss.all, sty.column___81Orl)}>
            <div className={classNames(projectcss.all, sty.freeBox__f7Oon)}>
              <Logo
                data-plasmic-name={"logo"}
                data-plasmic-override={overrides.logo}
                className={classNames("__wab_instance", sty.logo)}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__w4YYo
                )}
              >
                {
                  "Lorem ipsum dolor sit amet, consectetur \nadipiscing elit, sed do eiusmod tempor"
                }
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__kAee)}>
                <FacebooksvgIcon
                  className={classNames(projectcss.all, sty.svg__kb1WH)}
                  role={"img"}
                />

                <TwittersvgIcon
                  className={classNames(projectcss.all, sty.svg___8RrPe)}
                  role={"img"}
                />

                <InstagramsvgIcon
                  className={classNames(projectcss.all, sty.svg___9HmPl)}
                  role={"img"}
                />

                <LinkedinsvgIcon
                  className={classNames(projectcss.all, sty.svg___5RJi)}
                  role={"img"}
                />
              </div>
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.column__c6Mz1)}>
            <h4
              className={classNames(
                projectcss.all,
                projectcss.h4,
                projectcss.__wab_text,
                sty.h4__npQ0
              )}
            >
              {"Menu"}
            </h4>
            <Button
              className={classNames("__wab_instance", sty.button__m2HUa)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__yWvsK)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__qe1C)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___5KsAx
                )}
              >
                {"Product"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button___4NMGy)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__bCwKl)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__uR91H)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__aXnTc
                )}
              >
                {"Purchase"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__bGxRy)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__gJea5)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__yPur)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__yw24
                )}
              >
                {"How it Work"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__k5DIc)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__fMpf)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__xoNbz)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___7NWkm
                )}
              >
                {"About us"}
              </div>
            </Button>
          </div>
          <div className={classNames(projectcss.all, sty.column__lx6Ai)}>
            <h4
              className={classNames(
                projectcss.all,
                projectcss.h4,
                projectcss.__wab_text,
                sty.h4__lR4Ya
              )}
            >
              {"Help"}
            </h4>
            <Button
              className={classNames("__wab_instance", sty.button___1NpDf)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__xcUui)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__uusrh)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___1Suud
                )}
              >
                {"Privacy and\nPolicy"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__fyog0)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__eJChL)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__f1IHz)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__iAeYn
                )}
              >
                {"Terms of Use"}
              </div>
            </Button>
          </div>
          <div className={classNames(projectcss.all, sty.column__qf6Vh)}>
            <h4
              className={classNames(
                projectcss.all,
                projectcss.h4,
                projectcss.__wab_text,
                sty.h4__u2NE
              )}
            >
              {"Company"}
            </h4>
            <Button
              className={classNames("__wab_instance", sty.button__z6Uy9)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__ttBkh)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__jPbGm)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__r9CtV
                )}
              >
                {"Our Team"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__sghak)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg___9W33L)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__veFwY)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__wXpNu
                )}
              >
                {"Partner with us"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__lcqJ)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__xhEfe)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__mcXc0)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__hfQDa
                )}
              >
                {"Privacy & Policy"}
              </div>
            </Button>
          </div>
        </div>
      </p.Stack>
      <div className={classNames(projectcss.all, sty.freeBox__t1Fv1)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__wQdKm
          )}
        >
          {"Copyrights \u00a9 2022 All Rights Reserved by PlasmicApp"}
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "columns", "logo"],
  columns: ["columns", "logo"],
  logo: ["logo"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  columns: "div";
  logo: typeof Logo;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooterSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooterSection__VariantsArgs;
    args?: PlasmicFooterSection__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooterSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFooterSection__ArgsType,
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
          internalArgPropNames: PlasmicFooterSection__ArgProps,
          internalVariantPropNames: PlasmicFooterSection__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFooterSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooterSection";
  } else {
    func.displayName = `PlasmicFooterSection.${nodeName}`;
  }
  return func;
}

export const PlasmicFooterSection = Object.assign(
  // Top-level PlasmicFooterSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    logo: makeNodeComponent("logo"),

    // Metadata about props expected for PlasmicFooterSection
    internalVariantProps: PlasmicFooterSection__VariantProps,
    internalArgProps: PlasmicFooterSection__ArgProps
  }
);

export default PlasmicFooterSection;
/* prettier-ignore-end */
