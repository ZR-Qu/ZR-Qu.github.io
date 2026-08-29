export interface ProjectLink {
  label: string
  href: string
}

export interface SiteProject {
  name: string
  year: string
  description: string
  tags: string[]
  href?: string
  related?: ProjectLink[]
}

export const selectedProjects: SiteProject[] = [
  {
    name: 'LLM-TZ',
    year: '2026',
    description:
      'Trusted edge LLM inference on RK3588, combining OP-TEE protection with RKNPU acceleration.',
    tags: ['OP-TEE', 'RKNPU', 'RK3588', 'Edge LLM'],
    href: 'https://github.com/ZR-Qu/llm-tz',
    related: [
      { label: 'OP-TEE OS', href: 'https://github.com/ZR-Qu/optee_os' },
      { label: 'NPU Driver', href: 'https://github.com/ZR-Qu/driver-npu' }
    ]
  },
  {
    name: 'ARM CCA',
    year: '2026',
    description:
      'A trusted container prototype for Arm CCA Realms, reducing the Realm kernel TCB and protecting kernel page-table mappings.',
    tags: ['Arm CCA', 'Realm', 'Linux', 'Trusted Computing'],
    href: 'https://github.com/ZR-Qu/ARM-CCA-2026'
  },
  {
    name: 'Autonomous UAV Navigation',
    year: '2025',
    description: 'AirSim-based autonomous navigation using deep reinforcement learning.',
    tags: ['AirSim', 'Deep RL', 'UAV']
  }
]
