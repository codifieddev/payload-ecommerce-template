

"use client";

import { getTranslation } from "@payloadcms/translations";
import { NavGroup, useConfig, useTranslation } from "@payloadcms/ui";
import { EntityType, formatAdminURL, type NavGroupType } from "@payloadcms/ui/shared";
import LinkWithDefault from "next/link";
import { usePathname } from "next/navigation";
import { type NavPreferences } from "payload";

import { baseClass } from "./index";
import { getNavIcon } from "./navIconMap";
import { useMemo } from "react";


type Props = {
  groups: NavGroupType[];
  navPreferences: NavPreferences | null;
};

export const NavClient = ({ groups, navPreferences }: Props) => {
  const pathname = usePathname();

  const updatedGroups = useMemo(() => {
    const clonedGroups = structuredClone(groups); // or JSON.parse(JSON.stringify(groups))
    const tenantsGroup = clonedGroups.find(
      (group) => group.label === "Website Management"
    );
  
    // Only add if not already added
    if (
      tenantsGroup &&
      !tenantsGroup.entities.some((e) => e.slug === "tenants/create")
    ) {
      tenantsGroup.entities.push({
        slug: "websites/create",
        type: EntityType.collection,
        label: "Create Websites",
      });
    }
  
    return clonedGroups;
  }, [groups]);
 
  const {
    config: {
      routes: { admin: adminRoute },
    },
  } = useConfig();

  const { i18n } = useTranslation();

  return (
    <>
      {updatedGroups.map(({ entities, label }, key) => (
        <NavGroup isOpen={navPreferences?.groups?.[label]?.open} key={key} label={label}>
          {entities.map(({ slug, type, label }, i) => {
            let href: string;
            let id: string;

            if (type === EntityType.collection) {
              href = formatAdminURL({ adminRoute, path: `/collections/${slug}` });
              id = `nav-${slug}`;
            } else {
              href = formatAdminURL({ adminRoute, path: `/globals/${slug}` });
              id = `nav-global-${slug}`;
            }

            const activeCollection = pathname === href 

            console.log(activeCollection, pathname, href);
            const Icon = getNavIcon(slug);

            return (
              <LinkWithDefault
                className={[
                  `${baseClass}__link twp flex items-center py-2 hover:bg-black hover:rounded-[4px] hover:text-white`,
                  activeCollection && `active`,
                ]
                  .filter(Boolean)
                  .join(" ")}
                href={href}
                id={id}
                key={i}
                style={{
                  textDecoration: "none",
                  backgroundColor: activeCollection ? "black" : undefined,
                  borderRadius: activeCollection ? "4px" : undefined,
                  marginTop: "2px",
                  paddingLeft: "8px",
                  color: activeCollection ? "white" : undefined,
                }}
                prefetch={false}
              >
                {activeCollection && <div className={`${baseClass}__link-indicator`} />}
                {Icon && <Icon width={20} height={20} className={`${baseClass}__icon mr-2`} />}
                <span className={`${baseClass}__link-label text-lg leading-0`}>
                  {getTranslation(label, i18n)}
                </span>
              </LinkWithDefault>
            );
          })}
        </NavGroup>
      ))}
    </>
  );
};
