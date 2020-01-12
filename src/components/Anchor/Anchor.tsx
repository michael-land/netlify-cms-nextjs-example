import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { UrlObject } from "url";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import MuiLink, { LinkProps as MuiLinkProps } from "@material-ui/core/Link";
import { useRouter } from "next/router";
import { Except } from "type-fest";

type CommonNextLinkProps = Except<NextLinkProps, "href">;
type CommonMuiLinkProps = Except<MuiLinkProps, "href" | "children">;

interface Anchor extends CommonMuiLinkProps, CommonNextLinkProps, InternalLink {}

const Anchor = React.forwardRef<HTMLAnchorElement, Anchor>(function Anchor(props, ref) {
  const isInternal = /^\/(?!\/)/.test(String(props.href));
  const target = props.href === "#" ? "_self" : "_blank";

  return isInternal ? (
    <MuiLink {...props} component={InternalLink} ref={ref} />
  ) : (
    <MuiLink {...props} ref={ref} target={target} underline="none" />
  );
});

export default Anchor;

interface InternalLink extends Except<NextLinkProps, "href"> {
  className?: string;
  activeClassName?: string;
  children: any;
  href: string;
}

const InternalLink = React.forwardRef<HTMLAnchorElement, InternalLink>(function InternalLink(
  {
    as,
    href,
    replace,
    scroll,
    passHref,
    shallow,
    prefetch,
    children,
    className,
    activeClassName,
    ...other
  },
  ref
) {
  const router = useRouter();

  const cls = clsx(className, {
    [activeClassName!]:
      activeClassName && isActive && isActive(router.pathname, router.asPath, href, as)
  });

  return (
    <NextLink
      href={href}
      prefetch={prefetch}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
    >
      <a ref={ref} className={cls} {...other}>
        {children}
      </a>
    </NextLink>
  );
});

const REG = /\//g;

function isActive(
  currentAsPath: string,
  currentPathname: string,
  pathname: string | UrlObject,
  asPath?: string | UrlObject
) {
  if (asPath) {
    const asPathString = String(asPath);
    const slashs = asPathString.match(REG) || [];
    if (slashs.length > 2) {
      return currentAsPath.includes(asPathString);
    } else {
      return currentAsPath === asPathString;
    }
  } else {
    const slashs = String(pathname).match(REG) || [];

    if (slashs.length > 1) {
      return currentPathname.includes(String(pathname));
    } else {
      return currentPathname === String(pathname);
    }
  }
}
