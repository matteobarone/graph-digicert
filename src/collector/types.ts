export interface PaginationInput {
  limit: string;
  offset: string;
}

export interface PaginatedResponse {
  limit: number;
  offset: number;
  total: number;
}

export interface DigiCertAccount {
  id: number;
  make_renewal_calls: boolean;
  express_install_enabled: boolean;
  admin_email: string; // comma separated strings
  display_rep: boolean;
  rep_name: string;
  rep_phone: string;
  rep_email: string;
  balance_negative_limit: number;
  pricing_model: string;
  cert_transparency: string;
  cert_central_type: string;
}

export interface ListDomainResponse extends PaginatedResponse {
  domains: DigiCertDomain[];
}

export interface DigiCertOrganization {
  id: number;
  status: string;
  name: string;
  display_name: string;
  is_active: string;
}

export interface DigiCertDomainValidation {
  type: string;
  name: string;
  description: string;
  date_created: string;
  validated_until: string;
  status: string;
}

export interface DigiCertDomainContainer {
  id: number;
  parent_id: number;
  name: string;
  is_active: boolean;
}

export interface DigiCertDomain {
  id: number;
  is_active: boolean;
  name: string;
  date_created: string;
  organization: DigiCertOrganization;
  validations: DigiCertDomainValidation[];
  dcv_method: string;
  dcv_expiration: { ov: string; ev: string };
  container: DigiCertDomainContainer;
}
