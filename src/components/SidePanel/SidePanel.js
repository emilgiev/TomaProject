import React from 'react';
import styles from './SidePanel.module.css'

function SidePanel() {

    return (
        <div className={styles['sidepanel']}>
            <li>
                <ul>
                    <p>
                       Панел
                    </p>
                    <p>
                        Прогрес
                    </p>
                    <p>
                        Тренировъчен Дневник
                    </p>
                    <p>
                        Съобщения
                    </p>
                    <p>
                        Тренировъчна програма
                    </p>
                    <p>
                        Кардио
                    </p>
                    <p>
                        Хранителен режим
                    </p>
                    <p>
                        Смяна на храна
                    </p>
                    <p>
                        Витамини и Минерали
                    </p>
                </ul>
            </li>
        </div>
    )

}

export default SidePanel;